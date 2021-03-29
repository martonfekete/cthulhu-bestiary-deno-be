function welcomeText() {
    return new Promise(resolve => {
        resolve(`Welcome to the bestiary.`)
    });
}

export default async ({ response }) => {
  response.body = await welcomeText();
};