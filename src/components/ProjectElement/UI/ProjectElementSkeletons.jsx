const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function ProjectElementSkeleton() {
  return (
    <>
      <section className='flex w-1/2 justify-center items-center m-3'>
        <div className={`${shimmer} overflow-hidden rounded-xl bg-gray-100 shadow-sm h-[300px] w-[350px]`}>
        </div>
      </section>
    </>
  )
}