import { Injectable } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/createUsuario.dto';
import { PrismaService } from 'src/repository/prisma.service';
import { UpdateUsuarioDTO } from './dto/updateUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prismaService: PrismaService) {}

  async listAll() {
    return await this.prismaService.user.findMany();
  }

  listApenasUm() {
    return 'Listar apenas um usuario';
  }

  async createUsuario(payload: CreateUsuarioDTO) {
    await this.prismaService.user.create({
      data: {
        name: payload.name,
        age: payload.age,
        email: payload.email,
      },
    });

    return 'Usuário criado com sucesso';
  }

  async updateUsuario(id: string, body: UpdateUsuarioDTO) {
    const userExist = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExist) {
      return 'Usuário não existe';
    }

    await this.prismaService.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });

    return 'Usuário atualizado com sucesso';
  }
}
