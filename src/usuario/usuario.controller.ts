import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './dto/createUsuario.dto';
import { UpdateUsuarioDTO } from './dto/updateUsuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  listAll() {
    return this.usuarioService.listAll();
  }

  @Post()
  createUsuario(@Body() body: CreateUsuarioDTO) {
    return this.usuarioService.createUsuario(body);
  }

  @Put('/:id')
  updateUsuario(@Param('id') id: string, @Body() body: UpdateUsuarioDTO) {
    return this.usuarioService.updateUsuario(id, body);
  }
}
