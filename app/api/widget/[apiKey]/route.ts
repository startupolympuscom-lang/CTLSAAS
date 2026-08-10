import { db } from "@/lib/db"
import { chatbot } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export const runtime = "nodejs"

// Serves the embeddable widget as JavaScript. Clients paste:
//   <script src="https://<host>/api/widget/<apiKey>" async></script>
export async function GET(req: Request, { params }: { params: Promise<{ apiKey: string }> }) {
  const { apiKey } = await params
  const origin = new URL(req.url).origin

  const rows = await db
    .select({ name: chatbot.name, status: chatbot.status })
    .from(chatbot)
    .where(eq(chatbot.apiKey, apiKey))
    .limit(1)

  const bot = rows[0]
  const notFoundJs = `console.error("[CTL] Chatbot widget: invalid API key.");`

  if (!bot) {
    return new Response(notFoundJs, {
      status: 200,
      headers: { "Content-Type": "application/javascript; charset=utf-8", "Cache-Control": "no-store" },
    })
  }

  const cfg = JSON.stringify({
    apiKey,
    origin,
    name: bot.name,
    mascot: `${origin}/images/neo-mascot.png`,
  })

  const js = `(function () {
  var CFG = ${cfg};
  if (window.__ctlWidgetLoaded) return;
  window.__ctlWidgetLoaded = true;

  var YELLOW = "#F5C518", CHARCOAL = "#1F2430", WHITE = "#ffffff";
  var storeKey = "ctl_session_" + CFG.apiKey.slice(-8);
  var sessionId = null;
  try { sessionId = localStorage.getItem(storeKey); } catch (e) {}

  var style = document.createElement("style");
  style.textContent = [
    ".ctl-w-btn{position:fixed;bottom:20px;right:20px;width:64px;height:64px;border-radius:50%;background:" + YELLOW + ";border:none;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.25);z-index:2147483000;display:flex;align-items:center;justify-content:center;transition:transform .2s}",
    ".ctl-w-btn:hover{transform:scale(1.06)}",
    ".ctl-w-btn img{width:44px;height:44px;object-fit:contain}",
    ".ctl-w-panel{position:fixed;bottom:96px;right:20px;width:370px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 120px);background:" + WHITE + ";border-radius:18px;box-shadow:0 16px 48px rgba(0,0,0,.28);z-index:2147483000;display:none;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}",
    ".ctl-w-panel.open{display:flex}",
    ".ctl-w-head{background:" + CHARCOAL + ";color:" + WHITE + ";padding:14px 16px;display:flex;align-items:center;gap:10px}",
    ".ctl-w-head img{width:32px;height:32px;border-radius:50%;background:" + YELLOW + ";padding:2px}",
    ".ctl-w-head b{font-size:15px}",
    ".ctl-w-head small{display:block;opacity:.7;font-size:11px}",
    ".ctl-w-head .ctl-x{margin-left:auto;background:none;border:none;color:" + WHITE + ";font-size:20px;cursor:pointer;line-height:1}",
    ".ctl-w-body{flex:1;overflow-y:auto;padding:16px;background:#f6f7f9;display:flex;flex-direction:column;gap:10px}",
    ".ctl-w-msg{max-width:82%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}",
    ".ctl-w-bot{align-self:flex-start;background:" + WHITE + ";color:" + CHARCOAL + ";border:1px solid #e5e7eb;border-bottom-left-radius:4px}",
    ".ctl-w-user{align-self:flex-end;background:" + CHARCOAL + ";color:" + WHITE + ";border-bottom-right-radius:4px}",
    ".ctl-w-typing{align-self:flex-start;color:#6b7280;font-size:13px;font-style:italic}",
    ".ctl-w-foot{padding:10px;border-top:1px solid #e5e7eb;display:flex;gap:8px;background:" + WHITE + "}",
    ".ctl-w-foot input{flex:1;border:1px solid #d1d5db;border-radius:12px;padding:10px 12px;font-size:14px;outline:none}",
    ".ctl-w-foot input:focus{border-color:" + YELLOW + "}",
    ".ctl-w-foot button{background:" + YELLOW + ";color:" + CHARCOAL + ";border:none;border-radius:12px;padding:0 16px;font-weight:700;cursor:pointer;font-size:14px}",
    ".ctl-w-foot button:disabled{opacity:.5;cursor:not-allowed}",
    ".ctl-w-brand{text-align:center;font-size:11px;color:#9ca3af;padding:4px}"
  ].join("");
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.className = "ctl-w-btn";
  btn.setAttribute("aria-label", "Open chat");
  btn.innerHTML = '<img src="' + CFG.mascot + '" alt="">';

  var panel = document.createElement("div");
  panel.className = "ctl-w-panel";
  panel.innerHTML =
    '<div class="ctl-w-head"><img src="' + CFG.mascot + '" alt=""><div><b>' + esc(CFG.name) + '</b><small>Powered by CTL</small></div><button class="ctl-x" aria-label="Close">&times;</button></div>' +
    '<div class="ctl-w-body"></div>' +
    '<div class="ctl-w-foot"><input type="text" placeholder="Type your message..." aria-label="Message"><button>Send</button></div>' +
    '<div class="ctl-w-brand">Powered by CTL Smart Agent</div>';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var body = panel.querySelector(".ctl-w-body");
  var input = panel.querySelector("input");
  var send = panel.querySelector(".ctl-w-foot button");
  var closeBtn = panel.querySelector(".ctl-x");
  var greeted = false;

  function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}
  function addMsg(text, who){
    var m=document.createElement("div");
    m.className="ctl-w-msg "+(who==="user"?"ctl-w-user":"ctl-w-bot");
    m.textContent=text;
    body.appendChild(m);
    body.scrollTop=body.scrollHeight;
    return m;
  }
  function toggle(open){
    panel.classList.toggle("open", open);
    if(open){
      if(!greeted){ greeted=true; addMsg("Hi! I'm " + CFG.name + ". Ask me anything.", "bot"); }
      input.focus();
    }
  }
  btn.addEventListener("click", function(){ toggle(!panel.classList.contains("open")); });
  closeBtn.addEventListener("click", function(){ toggle(false); });

  function submit(){
    var text=input.value.trim();
    if(!text) return;
    input.value="";
    addMsg(text,"user");
    send.disabled=true; input.disabled=true;
    var typing=document.createElement("div");
    typing.className="ctl-w-typing"; typing.textContent="typing...";
    body.appendChild(typing); body.scrollTop=body.scrollHeight;

    fetch(CFG.origin + "/api/chat/" + CFG.apiKey, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({ message:text, sessionId:sessionId })
    }).then(function(r){ return r.json(); }).then(function(data){
      typing.remove();
      if(data.sessionId){ sessionId=data.sessionId; try{ localStorage.setItem(storeKey, sessionId); }catch(e){} }
      addMsg(data.reply || data.error || "Sorry, I couldn't answer that.", "bot");
    }).catch(function(){
      typing.remove();
      addMsg("Network error. Please try again.", "bot");
    }).finally(function(){
      send.disabled=false; input.disabled=false; input.focus();
    });
  }
  send.addEventListener("click", submit);
  input.addEventListener("keydown", function(e){ if(e.key==="Enter" && !e.isComposing){ submit(); } });
})();
`

  return new Response(js, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "Access-Control-Allow-Origin": "*",
    },
  })
}
