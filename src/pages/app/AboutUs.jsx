import ContactSection from "../../components/ContactSection";
import FeaturesSection from "../../components/FeaturesSection";
import MissionCard from "../../components/ui/MissionCard";

export default function AboutUs() {
    const missions = [
        {
            title: "Quality Selection",
            description:
                "We carefully curate our collection to ensure only the highest quality books are available for our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius",
        },
        {
            title: "Exceptional Service",
            description:
                "Our knowledgeable staff is always ready to assist you in finding the perfect book and providing recommendations. lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius",
        },
        {
            title: "Set Up Stores",
            description:
                "We have physical stores in various locations, allowing customers to browse and purchase books in person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius",
        },
    ];

    return (
        <>
            <div>
                <section className="hero-section relative">
                    <img className="w-full" src="../src/assets/Images/hero-rest-image.png" alt="Hero Img" />

                    <div className="hero-overlay absolute inset-0">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">
                                About Bookshop
                            </h1>
                            <p className="text-[16px] md:text-lg lg:text-2xl text-white text-center max-w-90 md:max-w-140 lg:max-w-163">
                                Welcome to our bookstore! We are passionate about books and dedicated to providing a
                                wide selection of titles for readers of all ages. Our mission is to foster a love for
                                reading and create a community where book lovers can connect and share their passion.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mission-section py-20 md:py-28 lg:py-61.5 px-14 md:px-20 lg:px-39">
                    <div className="container grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {missions.map((mission, index) => (
                            <MissionCard
                                key={index}
                                missionTitle={mission.title}
                                missionDescription={mission.description}
                            />
                        ))}
                    </div>
                </section>

                <ContactSection />

                <FeaturesSection />
            </div>
        </>
    );
}
