const formHTML = (email, fullname, username, address, passport) => {
    return `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Xác Minh tài khoản</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                    </head>
                    <body>
                        <div class="max-w-3xl bg-slate-300 p-8 rounded-2xl mt-20 mb-0 mr-auto ml-auto">
                            <h2 class="text-center p-4 uppercase font-semibold">Thông tin tài khoản vừa đăng kí</h2>
                            <table class="border- border-solid border-2 w-full">
                                <thead class="text-center">
                                    <tr class="border-2 h-10">
                                        <th>Họ và tên</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center h-10">
                                        <td>${fullname}</td>
                                        <td>${username}</td>
                                        <td>${email}</td>
                                        <td>${address}</td>
                                        <td>${passport}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </body>
                </html>

        `
}
module.exports = formHTML;