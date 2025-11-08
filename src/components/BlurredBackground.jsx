export default function BlurredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-[#22577a] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-20 -right-40 w-80 h-80 bg-[#c7f9cc] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#80ed99] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#57cc99] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#38a3a5] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-8000"></div>
    </div>
  );
}
