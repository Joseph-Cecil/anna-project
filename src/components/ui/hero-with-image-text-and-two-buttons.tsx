import { useState } from "react";
import { Mail, MapPin, PhoneCall, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function ContactHero() {
  const [tooltip, setTooltip] = useState<{ type: "phone" | "email"; message: string } | null>(null);

  const contactInfo = {
    phone: "+233 55 830 9059",
    email: "info@mug.edu.gh",
  };

  const handleCopy = (type: "phone" | "email") => {
    const value = type === "phone" ? contactInfo.phone : contactInfo.email;
    navigator.clipboard.writeText(value);
    setTooltip({ type, message: `${type === "phone" ? "Phone number" : "Email"} copied!` });

    // Hide tooltip after 2 seconds
    setTimeout(() => setTooltip(null), 2000);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline">Contact Us</Badge>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-left mb-10">
                We're here to help.
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground max-w-md text-left">
                Have questions, need support, or just want to say hello? Reach
                out to us via the details below, and we'll get back to you as
                soon as possible.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {/* Call Us Button */}
              <Button
                size="lg"
                className="gap-4 relative"
                variant="outline"
                onClick={() => handleCopy("phone")}
              >
                Call Us <PhoneCall className="w-4 h-4" />
                {tooltip?.type === "phone" && (
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-2 rounded shadow-lg">
                    {tooltip.message}
                  </span>
                )}
              </Button>

              {/* Email Us Button */}
              <Button
                size="lg"
                className="gap-4 relative"
                onClick={() => handleCopy("email")}
              >
                Email Us <Mail className="w-4 h-4" />
                {tooltip?.type === "email" && (
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-2 rounded shadow-lg">
                    {tooltip.message}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted rounded-md p-8 shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <PhoneCall className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-lg font-semibold">Phone</p>
                  <p
                    className="text-muted-foreground flex items-center gap-2 cursor-pointer"
                    onClick={() => handleCopy("phone")}
                  >
                    {contactInfo.phone} <Copy className="w-4 h-4 text-muted-foreground" />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p
                    className="text-muted-foreground flex items-center gap-2 cursor-pointer"
                    onClick={() => handleCopy("email")}
                  >
                    {contactInfo.email} <Copy className="w-4 h-4 text-muted-foreground" />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-lg font-semibold">Location</p>
                  <p className="text-muted-foreground">Methodist University - Dansoman, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactHero };
