/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const custoMap = new CustomMap('map');

custoMap.addMarker(user);
custoMap.addMarker(company);


