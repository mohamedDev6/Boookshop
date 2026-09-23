export default function MissionCard({ missionTitle, missionDescription }) {
    return (
        <div className="flex flex-col items-start justify-center gap-6 border rounded-xl p-6 border-[#22222233]">
            <h3 className="text-xl font-bold mb-2">{missionTitle}</h3>
            <p className="text-gray-600">{missionDescription}</p>
        </div>
    );
}
