import Button from "./button"
import iconLogo from "../../public/vite.svg"
import IconGithub from "../assets/github.svg"
function Hero() {
    return (
        <div className="bg-black w-full text-white px-20 py-6 space-y-6">
            <div className="w-full  flex items-center justify-center">
                <img src={iconLogo} alt="" />
            </div>
            <div className="w-full h-full flex  ">
                <div className="container mx-auto p-4 space-y-2">
                    <span>PANDUAN SKRIPSI</span>
                    <h1 className="text-5xl font-bold  ">TEKNIK INFORMATIKA</h1>
                    <h1 className="text-5xl font-bold  ">UNIVERSITAS NUSAPUTRA</h1>
                    <h1 className="text-5xl font-bold  ">SUKABUMI</h1>
                    <p className="text-lg text-gray-600">Dibuat untuk membantu mahasiswa yang tidak memperhatikan dosen ketika sosialisai Skripsi</p>
                    <div className="space-x-2 border-white flex">
                        <Button
                            label="Request Update" onClick={() => { }}
                            disabled={false} variant="secondary"
                        />
                        <Button
                            label="Start and Contribute!"
                            onClick={() => { }}
                            variant="primary"
                            icon={IconGithub}
                            iconPosition="left"
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Hero