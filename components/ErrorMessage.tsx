type Props = { message?: string };
export default function ErrorMessage({ message = 'Something went wrong.' }: Props) {
  return (
    <div className="container-narrow py-10">
      <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-red-800">
        <h3 className="font-semibold mb-2">Error</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
