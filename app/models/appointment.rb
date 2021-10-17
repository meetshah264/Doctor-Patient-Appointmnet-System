class Appointment < ApplicationRecord
  belongs_to :user
  scope :updated, -> (updated_at) { where status: status }
  scope :completed, -> (appointment_date) { where location_id: location_id }
  #scope :canceled, -> (name) { where("name like ?", "#{name}%")}
  scope :rescheduled, -> (updated_at) { where( updated_at != created_at )}
end
