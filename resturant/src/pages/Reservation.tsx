import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { restaurant } from "@/data/restaurant";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM",
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Reservations() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && name && email && phone) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-6 animate-fade-up max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-4xl text-foreground">Reservation Confirmed</h2>
          <p className="text-muted-foreground">
            Thank you, <span className="text-primary">{name}</span>. Your table for{" "}
            <span className="text-primary">{partySize}</span> on{" "}
            <span className="text-primary">{date && format(date, "MMMM d, yyyy")}</span> at{" "}
            <span className="text-primary">{time}</span> has been reserved.
          </p>
          <p className="text-muted-foreground text-sm">A confirmation will be sent to {email}</p>
          <Button variant="goldOutline" onClick={() => setSubmitted(false)} className="mt-4">
            Make Another Reservation
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="text-center mb-16 px-6">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Reserve Your Experience
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
          Book a <span className="text-gradient">Table</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto font-light animate-fade-up delay-200">
          Secure your seat at {restaurant.name} for an unforgettable dining experience.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-6">
        <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 space-y-10 elegant-shadow">
          
          {/* Date & Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date Picker */}
            <div className="space-y-3">
              <Label className="text-foreground font-sans tracking-wider uppercase text-xs flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" /> Select Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 bg-secondary border-border/50",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {date ? format(date, "MMMM d, yyyy") : "Choose a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              <Label className="text-foreground font-sans tracking-wider uppercase text-xs flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Select Time
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={cn(
                      "py-2 px-3 text-xs rounded border transition-all duration-300 font-sans",
                      time === slot
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary border-border/50 text-muted-foreground hover:border-primary hover:text-foreground"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Party Size */}
          <div className="space-y-3">
            <Label className="text-foreground font-sans tracking-wider uppercase text-xs flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> Party Size
            </Label>
            <div className="flex gap-3 flex-wrap">
              {partySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPartySize(size)}
                  className={cn(
                    "w-12 h-12 rounded-full border text-sm font-sans transition-all duration-300",
                    partySize === size
                      ? "bg-primary text-primary-foreground border-primary glow-gold"
                      : "bg-secondary border-border/50 text-muted-foreground hover:border-primary hover:text-foreground"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="luxury-divider">
            <span className="px-4 text-muted-foreground text-xs tracking-widest uppercase font-sans">
              Your Details
            </span>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-xs tracking-wider uppercase font-sans text-muted-foreground">Full Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                maxLength={100}
                className="bg-secondary border-border/50 h-12 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs tracking-wider uppercase font-sans text-muted-foreground">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                maxLength={255}
                className="bg-secondary border-border/50 h-12 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs tracking-wider uppercase font-sans text-muted-foreground">Phone</Label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                required
                maxLength={20}
                className="bg-secondary border-border/50 h-12 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs tracking-wider uppercase font-sans text-muted-foreground">Special Requests</Label>
              <Input
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Allergies, celebrations..."
                maxLength={500}
                className="bg-secondary border-border/50 h-12 focus:border-primary"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="gold"
            size="xl"
            className="w-full"
            disabled={!date || !time || !name || !email || !phone}
          >
            Confirm Reservation
          </Button>
        </div>
      </form>
    </main>
  );
}
