import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Marina Oliveira',
    email: 'marina@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Fernanda Oliveira',
    email: 'fernanda@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
