// Animation Styles Component
export function AnimationStyles() {
  return (
    <style jsx>{`
      @keyframes gridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      
      @keyframes dataStream {
        0% { transform: translateY(-100px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      
      @keyframes particleFloat {
        0% {
          transform: translateY(100vh) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 0.5;
        }
        90% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(-100vh) scale(1);
          opacity: 0;
        }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float 6s ease-in-out infinite;
        animation-delay: 2s;
      }
      
      .animate-spin-slow {
        animation: spin 20s linear infinite;
      }
      
      .animate-spin-slow-reverse {
        animation: spin 15s linear infinite reverse;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  )
}