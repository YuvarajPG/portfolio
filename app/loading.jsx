export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center pt-40 px-6">
            
            {/* Glowing Loading Text */}
            <div className="mb-12">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500 animate-pulse">
                    Loading...
                </p>
            </div>

            <div className="flex flex-col items-center gap-6 w-full max-w-4xl animate-pulse">
                {/* Navbar Skeleton */}
                <div className="fixed top-6 w-64 h-12 bg-white/10 rounded-full blur-sm" />

                {/* Hero Title Skeleton */}
                <div className="h-8 w-48 bg-white/20 rounded-md" />
                <div className="h-16 w-full md:w-2/3 bg-white/20 rounded-xl mt-4" />
                
                {/* Hero Subtitle Skeleton */}
                <div className="h-24 w-full md:w-3/4 bg-white/10 rounded-xl mt-6" />

                {/* Buttons Skeleton */}
                <div className="flex gap-4 mt-8">
                    <div className="h-12 w-40 bg-purple-500/30 rounded-full" />
                    <div className="h-12 w-40 bg-blue-500/30 rounded-full" />
                </div>
                
                {/* Profile Image/Graphic Skeleton */}
                <div className="h-64 w-64 bg-white/5 rounded-full mt-16 blur-xl" />
            </div>
        </div>
    );
}
