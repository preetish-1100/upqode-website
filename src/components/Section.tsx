export default function Section({ 
  children, 
  className = '', 
  id = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string; 
}) {
  return (
    <section 
      id={id} 
      className={`w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 flex justify-center ${className}`}
    >
      <div className="w-full max-w-[1440px]">
        {children}
      </div>
    </section>
  );
}
