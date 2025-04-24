
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface GlowingCardProps extends React.ComponentProps<typeof Card> {
  glowColor?: string;
  children: React.ReactNode;
}

const GlowingCard = ({ children, glowColor = "#0ea5e9", className, ...props }: GlowingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Card 
        className={`relative z-10 bg-white/95 backdrop-blur-sm ${className}`}
        style={{
          boxShadow: `0 0 20px ${glowColor}20, 0 0 40px ${glowColor}10`
        }}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
};

export default GlowingCard;
