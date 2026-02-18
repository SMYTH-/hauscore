import { Link } from 'react-router-dom';

export function TrainerBanner() {
  return (
    <div className="bg-zinc-900 text-white py-16 px-8 rounded-2xl">
      <div className="relative z-10 max-w-[35rem] space-y-4 text-start text-black">
        <p className="text-[0.5625rem] font-suisseIntlMono leading-[1.4] font-normal tracking-[.2em] h-fit w-fit bg-citrus px-[0.625rem] py-[0.375rem]">NEW CLUB</p>
        <h1 className="text-[4.375rem] leading-none font-agencyFbBold font-bold text-white">Join the Haus<span className="text-lime-500">core</span> Network.</h1>
        <p className="text-[1rem] font-suisseIntl leading-[1.625] font-light tracking-[.03em] text-white">Corehaus is a curated directory for high-performance personal trainers.
        Apply to be listed and connect with clients who take their training seriously.</p>
        <Link prefetch="intent" to="/for-trainers/apply" className="inline-flex items-center justify-center gap-2 relative h-fit text-[0.6875rem] leading-[1.2] tracking-[.2em] font-normal font-suisseIntlMono uppercase transition-all duration-300 ease-in-out px-[1.063rem] py-[8px] lg:px-5 lg:py-[11px] min-h-[2.063rem] lg:min-h-[2.375rem] border bg-white text-black border-white active:bg-black active:text-white active:border-white hover:bg-black hover:text-white hover:border-black">Apply to be listed</Link>
      </div>
    </div>
  );
}