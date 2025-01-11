'use client';

import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Modal,
  Textarea,
  TextInput,
  Radio,
  Select,
} from 'flowbite-react';
import { useState } from 'react';

const officers = [
  "Adam Freeman",
  "Aidan Walker",
  "Alexia Pacella",
  "Benny Wan",
  "Cody Ruhl",
  "Connor Shulist", 
  "Dan Merrill",
  "Dawson Lake",
  "Don Juranic",
  "Emily Fraser",
  "Grace Lombardi",
  "Hunter Chantiam",
  "Jamie Ardizzi",
  "Kathryn Robertson",
  "Mia Charles",
  "Shehreen Ahmed",
  "Stephen Small",
  "Taylor Unwin",
  "Todd Holmes",
]

const vehicles = [
  '',
  'BL-01',
  'BL-02',
  'BL-03',
  'BL-04',
  'BL-05',
  'BL-06',
  'BL-07',
  'BL-08',
];

export default function VehicleInspectionModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [operator, setOperator] = useState<string>();

  function onCloseModal() {
    setOpenModal(false);
    setOperator('');
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="dark">
        Vehicle Inspection Report
      </Button>
      <Modal show={openModal} onClose={onCloseModal} size="4xl">
          <Modal.Header className="bg-black">
            <span className="text-white">Vehicle Inspection Report</span>
          </Modal.Header>
          <Modal.Body>
            <div className="grid md:grid-cols-3 gap-4">
              <div className=''>
                <Label
                  htmlFor="operator"
                  value="Drivers Name"
                  className="ml-1"
                />
                <Select id="vehicle" defaultValue="">
                  {officers.map((officer) => (
                    <option key={officer}>{officer}</option>
                  ))}
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="vehicle"
                  value="Vehicle Number"
                  className="ml-1"
                />
                <Select id="vehicle" defaultValue="">
                  {vehicles.map((vehicle) => (
                    <option key="vehicle">{vehicle}</option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="odometer" value="Odometer" className="ml-1" />
                <TextInput
                  id="odometer"
                  placeholder=""
                  value=""
                  onChange={(event) => setOperator(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="my-4">
              <p className="text-center font-bold">
                Please indicate any items that are unsafe to operate or in need
                of repair
              </p>
            </div>

            <div className="my-4">
              <hr />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Alarms / Warnings" value="Alarms / Warnings" />
                  <p className="flex">Alarms / Warnings</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Controls / Switches"
                    value="Controls / Switches"
                  />
                  <p className="flex">Controls / Switches</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Lights / Lamps" value="Lights / Lamps" />
                  <p className="flex">Lights / Lamps</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Wiring / Connections"
                    value="Wiring / Connections"
                  />
                  <p className="flex">Wiring / Connections</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Hubs, Rims, Fasteners"
                    value="Hubs, Rims, Fasteners"
                  />
                  <p className="flex">Hubs, Rims, Fasteners</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Mud Flaps" value="Mud Flaps" />
                  <p className="flex">Mud Flaps</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Spare Tire (if applicable)"
                    value="Spare Tire (if applicable)"
                  />
                  <p className="flex">Spare Tire (if applicable)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Tires, Tread, Inflation"
                    value="Tires, Tread, Inflation"
                  />
                  <p className="flex">Tires, Tread, Inflation</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Fuel System" value="Fuel System" />
                  <p className="flex">Fuel System</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Exhaust System" value="Exhaust System" />
                  <p className="flex">Exhaust System</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Fluids Levels, Pressure"
                    value="Fluids Levels, Pressure"
                  />
                  <p className="flex">Fluids Levels, Pressure</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Cab, Doors, Body, Locks"
                    value="Cab, Doors, Body, Locks"
                  />
                  <p className="flex">Cab, Doors, Body, Locks</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-4">
              <div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Mirrors (Internal)"
                    value="Mirrors (Internal)"
                  />
                  <p className="flex">Mirrors (Internal)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Mirrors (External)"
                    value="Mirrors (External)"
                  />
                  <p className="flex">Mirrors (External)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Windshield / Windows"
                    value="Windshield / Windows"
                  />
                  <p className="flex">Windshield / Windows</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Wiper Blades" value="Wiper Blades" />
                  <p className="flex">Wiper Blades</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Breaks / Parking Brake"
                    value="Breaks / Parking Brake"
                  />
                  <p className="flex">Breaks / Parking Brake</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Controls / Pedals" value="Controls / Pedals" />
                  <p className="flex">Controls / Pedals</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Horn / Signals" value="Horn / Signals" />
                  <p className="flex">Horn / Signals</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="Insurance / Registration"
                    value="Insurance / Registration"
                  />
                  <p className="flex">Insurance / Registration</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Central Air" value="Central Air" />
                  <p className="flex">Central Air</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Horn / Radio" value="Horn / Radio" />
                  <p className="flex">Horn / Radio</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Seats" value="Seats" />
                  <p className="flex">Seats</p>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="Steering" value="Steering" />
                  <p className="flex">Steering</p>
                </div>
              </div>
            </div>

            <div className="my-4">
              <hr />
            </div>

            <div className="my-4">
              <p className="text-center font-bold">
                Please describe any items that are unsafe to operate or in need
                of repair below.
              </p>
            </div>

            <div>
              <Textarea id="comment" placeholder="" rows={4} />
            </div>
            <div className="mt-4">
              <fieldset className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Radio id="safe" name="operable" value="safe" />
                  <p>
                    The vehicle is safe to operate and not in need of repair.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="warning" name="operable" value="warning" />
                  <p>The vehicle is safe to operate and in need of repair.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="warning" name="operable" value="warning" />
                  <p>The vehicle is safe to operate and in need of repair.</p>
                </div>
              </fieldset>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Submit
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
