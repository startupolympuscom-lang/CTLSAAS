import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { createBreadcrumbSchema, JsonLd } from "./json-ld"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const baseUrl = "https://www.ctlsolution.org"

  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    ...items.map((item) => ({
      name: item.name,
      url: `${baseUrl}${item.href}`,
    })),
  ]

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(breadcrumbItems)} />
      <nav aria-label="Breadcrumb" className={`flex items-center text-sm text-muted-foreground ${className}`}>
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="flex items-center hover:text-primary transition-colors" itemProp="item">
              <Home className="h-4 w-4" />
              <span className="sr-only" itemProp="name">
                Home
              </span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="h-4 w-4 mx-1" aria-hidden="true" />
              {index === items.length - 1 ? (
                <span className="font-medium text-foreground" itemProp="name" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
