import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.entity';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { QuestionCategory } from './entities/questionCategory.entity';
import { Option } from './entities/option.entity';
import { Answer } from './entities/answer.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Quiz,
      Question,
      QuestionCategory,
      Option,
      Answer,
    ]),
  ],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
