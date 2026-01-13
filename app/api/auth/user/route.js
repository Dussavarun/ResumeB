// import { auth, currentUser } from "@clerk/nextjs/server";
// import {connectDB} from "../../../../lib/mongodb";
// import User from "../../../../models/User";
// import PersonalInfo from "../../../../models/PersonalInfo";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const user = await currentUser();
//     if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

//     const { id, emailAddresses, firstName, lastName, imageUrl } = user;
//     const email = emailAddresses?.[0]?.emailAddress;

//     // 1️⃣ Check if user already exists
//     let existingUser = await User.findOne({ clerkId: id });

//     if (existingUser) {
//       return Response.json({ message: "User already exists", user: existingUser });
//     }

//     // 2️⃣ Create PersonalInfo
//     const personalInfo = await PersonalInfo.create({
//       email,
//       fullName: `${firstName || ""} ${lastName || ""}`.trim(),
//       linkedin: "",
//       github: "",
//       portfolio: "",
//     });

//     // 3️⃣ Create User entry
//     const newUser = await User.create({
//       clerkId: id,
//       email,
//       firstName,
//       lastName,
//       avatarUrl: imageUrl,
//       personalInfo: personalInfo._id,
//     });

//     return Response.json(
//       { message: "User created successfully", user: newUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import PersonalInfo from "@/models/PersonalInfo";

export async function POST() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    // 1️⃣ Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({
        message: "User already exists",
        user: existingUser,
      });
    }

    // 2️⃣ Create PersonalInfo
    const personalInfo = await PersonalInfo.create({
      email,
      fullName: "",
      linkedin: "",
      github: "",
      portfolio: "",
    });

    // 3️⃣ Create User entry
    const newUser = await User.create({
      email,
      personalInfo: personalInfo._id,
    });

    return Response.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
