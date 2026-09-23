import { TbHeadset, TbRefresh, TbShieldCheck, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./ui/FeatureCard";

export default function FeaturesSection() {
    const features = [
        {
            featureTitle: "Fast & Reliable Shipping",
            FeatureCardDescription:
                "Get your favorite books delivered safely and quickly to your doorstep with our trusted shipping partners.",
            FeatureIcon: TbTruckDelivery,
        },
        {
            featureTitle: "Secure Payment",
            FeatureCardDescription:
                "Shop with confidence using encrypted and secure payment methods that protect your information.",
            FeatureIcon: TbShieldCheck,
        },
        {
            featureTitle: "Easy Returns",
            FeatureCardDescription:
                "Changed your mind? Return eligible books easily with our simple and hassle-free return policy.",
            FeatureIcon: TbRefresh,
        },
        {
            featureTitle: "24/7 Customer Support",
            FeatureCardDescription:
                "Our support team is always available to answer your questions and help you anytime.",
            FeatureIcon: TbHeadset,
        },
    ];

    return (
        <section className="features-section py-30 px-15 flex items-center justify-center">
            <div className="container grid w-11/12 gap-15.25 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        featureTitle={feature.featureTitle}
                        FeatureCardDescription={feature.FeatureCardDescription}
                        FeatureIcon={feature.FeatureIcon}
                    />
                ))}
            </div>
        </section>
    );
}
