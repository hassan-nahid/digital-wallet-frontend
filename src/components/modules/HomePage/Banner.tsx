import { ExternalLink, CheckCircle, Lock, BarChart2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import bannerImage from "@/assets/image/photo.png";

const Banner = () => {
    return (
        <section className="relative overflow-hidden py-20">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
                    alt="pattern"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent dark:from-transparent dark:via-black/20" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
                    <div className="max-w-2xl">


                        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl lg:text-5xl">
                            Modern digital wallet for everyday life
                            <span className="text-primary block">Payments, budgets, and insights — all in one place.</span>
                        </h1>

                        <p className="mt-4 text-base text-slate-700 dark:text-slate-300 max-w-2xl">
                            Securely send and receive money, pay bills, and manage your finances with
                            powerful tools built for speed and privacy. Designed for individuals and businesses.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/register">
                                <Button size="lg" className="px-6 py-3 shadow-sm">
                                    Create account
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" className="px-6 py-3">
                                    Learn more <ExternalLink className="ml-2 inline-block" />
                                </Button>
                            </Link>
                        </div>

                        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                                    <CheckCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Instant transfers</div>
                                    <div className="text-xs text-muted-foreground">Send money globally in seconds</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Secure by design</div>
                                    <div className="text-xs text-muted-foreground">Two-factor auth and encryption</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                                    <BarChart2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Smart insights</div>
                                    <div className="text-xs text-muted-foreground">Spending reports and budgets</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        {/* Illustration / Phone mock */}

                        <img
                            src={bannerImage}
                            alt="wallet illustration"
                            className="dark:brightness-75 dark:contrast-125 dark:hue-rotate-15 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
