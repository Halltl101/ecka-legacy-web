
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
      <DialogContent className="sm:max-w-[500px] bg-[#1A1A1A] border-[#C9A34C]/30">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Schedule Intro Call</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-black border-gray-600 text-white"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-black border-gray-600 text-white"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Company *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="bg-black border-gray-600 text-white"
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="bg-black border-gray-600 text-white"
                placeholder="CEO, CFO, etc."
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-black border-gray-600 text-white"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason" className="text-white">Reason for Interest *</Label>
            <Textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
              className="bg-black border-gray-600 text-white min-h-[100px]"
              placeholder="Please describe your interest in partnering with Ecka Holdings..."
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#C9A34C] hover:bg-[#B8923E] text-black"
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
