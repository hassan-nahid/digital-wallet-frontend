
import { Button } from "@/components/ui/button"
import { Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import { Link } from "react-router"

const CallToAction = () => {
    return (
        <footer className="bg-primary/90 py-12">
            <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center text-center gap-6">
                <h2 className="text-2xl lg:text-3xl font-bold">Ready to experience WalletX? <br className="hidden sm:block" />Sign up today!</h2>
                <Link to="/register">
                    <Button size="lg" className="bg-white cursor-pointer text-primary font-semibold px-8 py-5 shadow-lg hover:bg-primary-foreground hover:text-primary transition">
                        Sign Up
                    </Button>
                </Link>
                <div className="flex gap-4 mt-4">
                    <a href="mailto:support@digiwallet.com" className="hover:text-primary-foreground transition" title="Email">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition" title="Facebook">
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition" title="Twitter">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition" title="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
                <div className="text-sm mt-2 opacity-80">
                    Contact: <a href="mailto:support@digiwallet.com" className="underline hover:text-primary-foreground">support@digiwallet.com</a>
                </div>
            </div>
        </footer>
    )
}

export default CallToAction