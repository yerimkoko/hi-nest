import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `THis will delete a movie with the id :${movieId}`;
  }

  @Patch('/:id') // Put 이랑 Patch 둘 다 수정 할 수 있다.
  path(@Param('id') movieId: string) {
    return `THis will patch a movie with the id: ${movieId}`;
  }
}
