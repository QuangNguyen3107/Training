import container from "../../infrastructure/di/container";

export function WatchDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-20">
            <h1 className="text-5xl font-bold text-white mb-8">
                Watch Demo
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-center">
                Here you can watch a demo of our services and platform features.
            </p>
            <div className="w-full max-w-4xl aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white">Video Player Placeholder</span>
            </div>
        </div>
    );
}
export class Watch {
    Use() {
        console.log(container.get<Watch>('watch'));
        return <WatchDemo />;
    }
}