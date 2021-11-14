import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestions1636842409396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "current_timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "current_timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
