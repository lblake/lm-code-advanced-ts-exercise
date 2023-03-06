import { sendNewUser } from "../../../api/send_new_user";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUser() {
	clear("yes");

	const userName = await prompt("What is the name of the new user? ");

	printNewLine();
	print(`➕🧑 Creating user "${userName}"...`);

	const success = await sendNewUser(userName);

	if (success === true) print("🥳 User created successfully!");
	else print("😵 User could NOT be created.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
