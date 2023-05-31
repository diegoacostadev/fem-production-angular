import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from '@fem/api-interfaces';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class WidgetsService {
  mockWidgets: Widget[] = [
    {
      "id": "1",
      "title": "Remote Widget 01",
      "description": "Pending..."
    },
    {
      "id": "2",
      "title": "Remote Widget 02",
      "description": "Pending..."
    },
    {
      "id": "3",
      "title": "Remote Widget 03",
      "description": "Pending..."
    }
  ];
  create(widget: Widget) {
    console.log('create api');
    this.mockWidgets = [...this.mockWidgets, Object.assign({}, widget, { id: uuidv4() })];
    return this.mockWidgets;
  }

  findAll() {
    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find(w => w.id === id);
  }

  update(id: string, widget: Widget) {
    console.log('update api');
    this.mockWidgets = this.mockWidgets.map(w => w.id === id ? widget : w);
    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter(w => w.id !== id);
    return this.mockWidgets;
  }
}
