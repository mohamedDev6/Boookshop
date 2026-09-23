export default function FeatureCard({ featureTitle, FeatureCardDescription, FeatureIcon }) {
    return (
        <div className="feature-card flex flex-col gap-4">
            <FeatureIcon size={38} className="text-[#22222280]" />

            <h3 className="text-lg font-bold leading-[100%]">{featureTitle}</h3>

            <p className="text-[16px] leading-[100%] text-[#22222280]">{FeatureCardDescription}</p>
        </div>
    );
}
