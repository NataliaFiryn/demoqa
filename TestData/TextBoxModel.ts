import { faker } from '@faker-js/faker';

export class textBoxModel {
  userName = faker.person.fullName();
  userEmail = faker.internet.email();
  currentAddress = faker.location.streetAddress();
  permanentAddress = faker.location.streetAddress();
}

export default new textBoxModel();
