// DTO(Data transfer object) 클래스: 외부로부터 유입되는 데이터를 나타내는 것
export class CreateUserDto {
  serviceId: string;
  password: string;
  nickname: string;
}
