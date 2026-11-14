import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  children: React.ReactNode;
  mode?: 'general' | 'rights';
}

const assetTypes = ['Master Recordings', 'Publishing / Writer\'s Share', 'Neighboring Rights', 'Producer Royalties', 'Sync Rights'];
const roles = ['Artist / Songwriter', 'Producer', 'Manager / Attorney', 'Publisher / Administrator', 'Estate / Heir'];
const royaltyRanges = ['Under $50K', '$50K–$250K', '$250K–$1M', '$1M–$5M', '$5M+', 'Not sure'];

const inputClass =
  "bg-background border border-gold/20 text-foreground placeholder:text-foreground/30 focus-visible:border-gold focus-visible:ring-gold/30 rounded-none";

const LeadForm = ({ children, mode = 'general' }: LeadFormProps) => {
  const isRights = mode === 'rights';
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', title: '', phone: '', reason: '',
    catalog: '', role: '', assets: [] as string[], royalties: '',
  });

  const toggleAsset = (a: string) => setFormData(prev => ({ ...prev, assets: prev.assets.includes(a) ? prev.assets.filter(x => x !== a) : [...prev.assets, a] }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(isRights ? 'New Catalog Valuation Request' : 'New Lead — Schedule Intro Call Request');
      const body = encodeURIComponent(isRights ?
`Catalog Valuation Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Artist / Catalog / Entity: ${formData.catalog}
Role: ${formData.role}
Asset Types: ${formData.assets.join(', ')}
Estimated Annual Royalties: ${formData.royalties}
Details: ${formData.reason}` :
`New Lead Information:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Title: ${formData.title}
Phone: ${formData.phone}
Reason for Interest: ${formData.reason}

This lead was submitted through the Ecka Holdings website contact form.`
      );

      const mailtoLink = `mailto:info@eckaholdings.com?subject=${subject}&body=${body}`;
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Thank you for your interest.",
        description: "Someone from our team will be in touch shortly. If your mail client didn't open, please write to info@eckaholdings.com.",
      });

      setFormData({ name: '', email: '', company: '', title: '', phone: '', reason: '', catalog: '', role: '', assets: [], royalties: '' });
      setIsOpen(false);
    } catch {
      toast({
        title: "Thank you for your interest.",
        description: "Someone from our team will be in touch shortly. Please email info@eckaholdings.com if needed.",
      });
      setFormData({ name: '', email: '', company: '', title: '', phone: '', reason: '', catalog: '', role: '', assets: [], royalties: '' });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] bg-surface border border-gold/30 rounded-none">
        <DialogHeader>
          <span className="eyebrow-gold">{isRights ? 'Confidential Valuation' : 'Partnership'}</span>
          <DialogTitle className="font-display text-3xl font-light text-foreground mt-2">
            {isRights ? <>Evaluate <span className="italic text-gold">Your Catalog.</span></> : <>Schedule <span className="italic text-gold">Intro Call.</span></>}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="eyebrow">Full Name *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className={inputClass} placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="eyebrow">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={inputClass} placeholder="jane@company.com" />
            </div>
          </div>

{isRights ? (<>
          <div className="space-y-2">
            <Label htmlFor="catalog" className="eyebrow">Artist / Catalog / Entity *</Label>
            <Input id="catalog" name="catalog" value={formData.catalog} onChange={handleInputChange} required className={inputClass} placeholder="Artist or catalog name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role" className="eyebrow">Your Role *</Label>
              <select id="role" required value={formData.role} onChange={e => setFormData(p => ({ ...p, role: e.target.value }))} className="bg-background border border-gold/20 text-foreground h-10 w-full px-3 text-sm rounded-none focus:outline-none focus:border-gold">
                <option value="">Select…</option>
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="royalties" className="eyebrow">Annual Royalties</Label>
              <select id="royalties" value={formData.royalties} onChange={e => setFormData(p => ({ ...p, royalties: e.target.value }))} className="bg-background border border-gold/20 text-foreground h-10 w-full px-3 text-sm rounded-none focus:outline-none focus:border-gold">
                <option value="">Select…</option>
                {royaltyRanges.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <fieldset className="space-y-2">
            <legend className="eyebrow mb-2">Asset Types</legend>
            <div className="flex flex-wrap gap-2">
              {assetTypes.map(a => (
                <button type="button" key={a} onClick={() => toggleAsset(a)} aria-pressed={formData.assets.includes(a)}
                  className={`px-3 py-1.5 text-xs border transition-colors ${formData.assets.includes(a) ? 'border-gold bg-gold/10 text-gold' : 'border-gold/20 text-foreground/60 hover:border-gold/50'}`}>
                  {a}
                </button>
              ))}
            </div>
          </fieldset>

          </>) : (<>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="eyebrow">Company *</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required className={inputClass} placeholder="Company Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title" className="eyebrow">Job Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleInputChange} className={inputClass} placeholder="CEO, CFO, etc." />
            </div>
          </div>

          </>)}

          <div className="space-y-2">
            <Label htmlFor="phone" className="eyebrow">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="eyebrow">{isRights ? 'Tell Us About the Catalog *' : 'Reason for Interest *'}</Label>
            <Textarea id="reason" name="reason" value={formData.reason} onChange={handleInputChange} required className={`${inputClass} min-h-[100px]`} placeholder={isRights ? 'Release years, notable works, current administration…' : 'Please describe your interest in partnering with Ecka Holdings…'} />
            {isRights && <p className="text-xs text-foreground/40 pt-1">All submissions are held in strict confidence. NDA available on request.</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-gold/30 text-foreground/70 hover:bg-surface hover:text-foreground rounded-none uppercase tracking-[0.2em] text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gold text-background hover:bg-gold-highlight rounded-none uppercase tracking-[0.25em] text-xs font-bold"
            >
              {isSubmitting ? 'Submitting…' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
