import { pgTable, text, timestamp, boolean, serial, integer } from "drizzle-orm/pg-core"

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
})

// --- App tables ------------------------------------------------------------
// Every app table carries a plain `userId` column so all queries can be scoped
// per user. No foreign keys by default.

// Which CTL services a client has activated / requested.
export const userService = pgTable("user_service", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  serviceId: text("serviceId").notNull(), // matches an id in lib/services.ts
  status: text("status").notNull().default("requested"), // "active" | "requested" | "inactive"
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

// A generated chatbot instance owned by a client.
export const chatbot = pgTable("chatbot", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  documentation: text("documentation").notNull(), // docs fed to the chatbot
  apiKey: text("apiKey").notNull().unique(),
  status: text("status").notNull().default("active"), // "active" | "paused"
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

// Individual questions asked to a chatbot (analytics source of truth).
export const chatbotMessage = pgTable("chatbot_message", {
  id: serial("id").primaryKey(),
  chatbotId: integer("chatbotId").notNull(),
  userId: text("userId").notNull(),
  sessionId: text("sessionId").notNull(), // groups messages into a "conversation"
  question: text("question").notNull(),
  answer: text("answer"), // the chatbot's actual reply (null for seeded sample data)
  answered: boolean("answered").notNull().default(true),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})
