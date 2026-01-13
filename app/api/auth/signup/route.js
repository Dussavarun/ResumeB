// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/lib/db";
// import User from "@/models/User";

// export async function POST(req) {
//   const { email, password } = await req.json();

//   await connectDB();

//   const exists = await User.findOne({ email });
//   if (exists) {
//     return NextResponse.json({ error: "User exists" }, { status: 400 });
//   }

//   const hashed = await bcrypt.hash(password, 10);

//   await User.create({ email, password: hashed });

//   return NextResponse.json({ success: true });
// }
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  await connectDB();

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ success: true });
}
