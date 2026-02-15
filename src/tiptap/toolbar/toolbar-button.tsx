import { useRef } from 'react';

interface Props {
  title: string;
  isActive?: boolean;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  size: number;
  onClick: () => void;
}

export default function ToolbarButton({
  isActive,
  icon: Icon,
  size,
  onClick
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      className="flex h-6 w-6 cursor-pointer items-center justify-center"
      onClick={onClick}
    >
      <Icon size={size} color={isActive ? '#0099ff' : '#999999'} />
    </button>
  );
}
