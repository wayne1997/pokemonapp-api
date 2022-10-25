import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
export declare class TypeController {
    private readonly typeService;
    constructor(typeService: TypeService);
    create(createTypeDto: CreateTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTypeDto: UpdateTypeDto): string;
    remove(id: string): string;
}
