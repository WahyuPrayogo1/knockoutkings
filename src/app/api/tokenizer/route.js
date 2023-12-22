import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export async function POST(request) {
  try {
    const requestData = await request.json();
    console.log('Received Payload:', requestData);

    const items = requestData.map((product) => ({
      id: product.id,
      name: product.productName,
      price: product.price,
      quantity: product.quantity,
    }));

    let parameter = {
      item_details: items,
      transaction_details: {
        order_id: String(requestData[0].id), // Assuming you want to use the order ID of the first product
        gross_amount: requestData.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      },
    };

    console.log('Transaction Parameter:', parameter);

    const token = await snap.createTransactionToken(parameter);
    console.log(token);

    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
