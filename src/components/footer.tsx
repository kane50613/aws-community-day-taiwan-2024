import { Button } from "@/components/ui/button.tsx";

export const Footer = () => (
  <footer className="w-full container">
    <div className="py-12 flex text-center md:text-start flex-col md:flex-row items-center gap-4">
      <h3 className="text-3xl md:text-4xl font-bold">
        Interested in sponsoring?
      </h3>
      <div className="flex-grow" />
      <Button className="rounded-full text-md font-medium" size="lg">
        Contact Us
      </Button>
      <Button
        className="rounded-full text-md font-medium"
        size="lg"
        variant="outline"
      >
        Request Demo
      </Button>
    </div>
    <div className="flex flex-col md:flex-row md:items-center justify-between border-t py-14 gap-8">
      <div className="space-y-4">
        <p className="font-medium text-lg">AWS Community Day Taiwan 2024</p>
        <p className="text-primary/75 text-sm">
          © 2024 AWS User Group, not affiliated with Amazon
        </p>
      </div>
      <div className="grid gap-2 text-sm text-primary/75">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  </footer>
);
