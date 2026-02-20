import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#2D3A2F] pt-20">
      <div className="max-w-[1200px] w-full px-6 md:px-12">
        <Skeleton className="h-4 w-32 mb-6 bg-white/20" />
        <Skeleton className="h-16 md:h-20 lg:h-24 w-3/4 mb-4 bg-white/20" />
        <Skeleton className="h-16 md:h-20 lg:h-24 w-1/2 mb-8 bg-white/20" />
        <Skeleton className="h-0.5 w-16 mb-6 bg-white/30" />
        <Skeleton className="h-6 w-full max-w-2xl mb-10 bg-white/20" />
        <div className="flex gap-4">
          <Skeleton className="h-14 w-40 rounded-full bg-white/20" />
          <Skeleton className="h-14 w-40 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="bg-[#F8FAF8] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Skeleton className="aspect-square rounded-3xl bg-[#E8EFE8]" />
          <div className="space-y-6">
            <Skeleton className="h-0.5 w-12 bg-[#5F8F72]" />
            <Skeleton className="h-4 w-24 bg-[#AFC8B2]/30" />
            <Skeleton className="h-12 w-3/4 bg-[#2D3A2F]/10" />
            <Skeleton className="h-24 w-full bg-[#5F6B61]/10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <Skeleton className="h-32 rounded-2xl bg-white" />
              <Skeleton className="h-32 rounded-2xl bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MenuSkeleton() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Skeleton className="h-4 w-24 mx-auto mb-4 bg-[#AFC8B2]/30" />
          <Skeleton className="h-12 w-64 mx-auto bg-[#2D3A2F]/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#F8FAF8] rounded-2xl p-6">
              <Skeleton className="aspect-video rounded-xl mb-4 bg-[#E8EFE8]" />
              <Skeleton className="h-6 w-3/4 mb-2 bg-[#2D3A2F]/10" />
              <Skeleton className="h-4 w-full mb-4 bg-[#5F6B61]/10" />
              <Skeleton className="h-6 w-20 bg-[#5F8F72]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySkeleton() {
  return (
    <section className="bg-[#F8FAF8] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Skeleton className="h-4 w-24 mx-auto mb-4 bg-[#AFC8B2]/30" />
          <Skeleton className="h-12 w-48 mx-auto bg-[#2D3A2F]/10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="aspect-square rounded-xl bg-[#E8EFE8]" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <Skeleton className="h-4 w-24 bg-[#AFC8B2]/30" />
            <Skeleton className="h-12 w-3/4 bg-[#2D3A2F]/10" />
            <Skeleton className="h-20 w-full bg-[#5F6B61]/10" />
            <div className="space-y-4 pt-4">
              <Skeleton className="h-6 w-full bg-[#2D3A2F]/10" />
              <Skeleton className="h-6 w-3/4 bg-[#2D3A2F]/10" />
              <Skeleton className="h-6 w-1/2 bg-[#2D3A2F]/10" />
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-12 w-full rounded-lg bg-[#F8FAF8]" />
            <Skeleton className="h-12 w-full rounded-lg bg-[#F8FAF8]" />
            <Skeleton className="h-32 w-full rounded-lg bg-[#F8FAF8]" />
            <Skeleton className="h-12 w-full rounded-lg bg-[#5F8F72]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
