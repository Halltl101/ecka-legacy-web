
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  children: React.ReactNode;
}

const LeadForm = ({ children }: LeadFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    reason: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('New Lead - Schedule Intro Call Request');
      const body = encodeURIComponent(`
New Lead Information:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Title: ${formData.title}
Phone: ${formData.phone}
Reason for Interest: ${formData.reason}

This lead was submitted through the Ecka Holdings website contact form.
      `);
      
      const mailtoLink = `mailto:info@eckaholdings.com?subject=${subject}&body=${body}`;
      
      // Create a temporary anchor element and trigger click
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Thank you for your interest!",
        description: "Someone from our team will contact you shortly. If your email client didn't open, please contact us directly at info@eckaholdings.com",
      });
      
      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        company: '',
        title: '',
        phone: '',
        reason: ''
      });
      setIsOpen(false);
      
    } catch (error) {
      console.log('Form submission error:', error);
      toast({
        title: "Thank you for your interest!",
        description: "Someone from our team will contact you shortly. Please contact us directly at info@eckaholdings.com if needed.",
      });
      
      // Still reset form and close dialog even if mailto fails
      setFormData({
        name: '',
        email: '',
        company: '',
        title: '',
        phone: '',
        reason: ''
      });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-navy-800 border-gold/30">
        <DialogHeader>
          <DialogTitle className="font-display text-ink text-xl">Schedule Intro Call</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-ink text-[11px] uppercase tracking-[0.22em]">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ink text-[11px] uppercase tracking-[0.22em]">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-ink text-[11px] uppercase tracking-[0.22em]">Company *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40"
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title" className="text-ink text-[11px] uppercase tracking-[0.22em]">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40"
                placeholder="CEO, CFO, etc."
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-ink text-[11px] uppercase tracking-[0.22em]">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason" className="text-ink text-[11px] uppercase tracking-[0.22em]">Reason for Interest *</Label>
            <Textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
              className="bg-navy border-white/10 text-ink placeholder:text-ink-muted focus-visible:ring-gold/40 min-h-[100px]"
              placeholder="Please describe your interest in partnering with Ecka Holdings..."
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-white/15 text-ink-muted hover:bg-white/5 hover:text-ink"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gold hover:brightness-110 text-navy"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
