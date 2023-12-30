import Image from "next/image";

const Payment = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Bilt Card Subscription
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Make easy subscriptions using this payment link. We&apos;ll charge you
        50 cents 5 times a month automatically.
      </p>

      <div className="mt-5">
        <Image
          src={"/payment_link.png"}
          alt={"pay with stripe"}
          width={300}
          height={300}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  </div>
);

export default Payment;
