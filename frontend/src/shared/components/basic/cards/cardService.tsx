
interface CardServiceProps {
  title: string;
  description: string;
}

export default function CardService({ title, description }: CardServiceProps) {
  return (
    <div class="block p-6 mb-6 bg-white border border-gray-300 rounded-lg shadow-2xl lg:mb-0">
      <h3 class="mb-2 text-xl font-semibold text-[#0099aa]">{title}</h3>
      <p class="font-md text-gray-600">
        {description}
      </p>
    </div>
  );
}
