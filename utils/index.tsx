import * as v from 'valibot';

export const UserSchema = v.object({
  id: v.number(),
  name: v.string(),
  username: v.string(),
  email: v.string(),
  address: v.object({
    street: v.string(),
    suite: v.string(),
    city: v.string(),
    zipcode: v.string(),
    geo: v.object({
      lat: v.string(),
      lng: v.string(),
    }),
  }),
  phone: v.string(),
  website: v.string(),
  company: v.object({
    name: v.string(),
    catchPhrase: v.string(),
    bs: v.string(),
  }),
});

export const UsersArraySchema = v.array(UserSchema);
