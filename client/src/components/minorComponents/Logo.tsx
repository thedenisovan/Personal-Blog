export default function Logo({
  size,
  margin = '0',
  text = 'xl',
}: {
  size: string;
  margin?: string;
  text?: string;
}) {
  return (
    <div
      className={`w-${size} h-${size} m-${margin} flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-2 text-white font-bold text-${text}`}
    >
      DD
    </div>
  );
}
