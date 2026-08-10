"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPageClient() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  // Ensure page always loads from the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: t.contact.successMessage,
        })
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: t.contact.errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-yellow/20 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-moroccan-charcoal mb-4">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-moroccan-charcoal">{t.contact.sendMessage}</CardTitle>
                <CardDescription>{t.contact.sendMessageDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t.common.name} {t.common.required}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 focus:border-moroccan-charcoal"
                      placeholder={t.common.yourFullName}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t.common.email} {t.common.required}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 focus:border-moroccan-charcoal"
                      placeholder={t.common.yourEmail}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t.common.company}</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 focus:border-moroccan-charcoal"
                      placeholder={t.common.yourCompany}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {t.common.message} {t.common.required}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 focus:border-moroccan-charcoal min-h-[120px]"
                      placeholder={t.common.tellUsAbout}
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-moroccan-charcoal hover:bg-moroccan-charcoal/90 text-white py-6 text-lg font-semibold border-4 border-moroccan-charcoal shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t.common.sending}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t.common.sendMessage}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-moroccan-charcoal">
                    {t.contact.contactInformation}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-moroccan-yellow p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-moroccan-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-moroccan-charcoal">{t.common.email}</h3>
                      <p className="text-gray-600">admin@ctlrhadd.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-moroccan-yellow p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-moroccan-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-moroccan-charcoal">{t.common.phone}</h3>
                      <p className="text-gray-600">+212 654 187 484</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-moroccan-yellow p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-moroccan-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-moroccan-charcoal">{t.common.location}</h3>
                      <p className="text-gray-600">
                        Office Rue Menton VN Meknes, Maroc. Remote services available worldwide.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-moroccan-yellow/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-xl text-moroccan-charcoal mb-3">
                    {t.common.businessHours}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>{t.common.mondayFriday}</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.common.saturday}</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.common.sunday}</span>
                      <span>{t.common.closed}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">{t.common.moroccoTime}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
