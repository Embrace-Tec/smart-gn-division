import { Component, OnInit } from '@angular/core';

interface Service {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {
  services: Service[] = [];
  newServiceName: string = '';
  editServiceId: number | null = null;
  editedServiceName: string = '';

  // Mock data for demonstration
  mockServices: Service[] = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile App Development' },
    { id: 3, name: 'Cloud Services' }
  ];

  ngOnInit(): void {
    this.getAllServices();
  }

  // Simulate fetching services from an API or local data
  getAllServices() {
    // Replace this with an actual HTTP call if you have a backend
    // Example:
    // this.http.get<Service[]>('https://api.example.com/services').subscribe((data) => {
    //   this.services = data;
    // });

    // For now, use mock data
    this.services = this.mockServices;
  }

  addService() {
    if (this.newServiceName.trim()) {
      const newService: Service = {
        id: this.services.length + 1,
        name: this.newServiceName.trim()
      };
      this.services.push(newService);
      this.newServiceName = '';
    }
  }

  editService(service: Service) {
    this.editServiceId = service.id;
    this.editedServiceName = service.name;
  }

  saveEditedService() {
    const service = this.services.find(s => s.id === this.editServiceId);
    if (service) {
      service.name = this.editedServiceName.trim();
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editServiceId = null;
    this.editedServiceName = '';
  }

  deleteService(serviceId: number) {
    this.services = this.services.filter(s => s.id !== serviceId);
  }
}
