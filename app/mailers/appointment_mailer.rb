class AppointmentMailer < ApplicationMailer
  default from: 'meets9921@gmail.com'

  def appointment_confirmation_email
    @user = params[:user]
    @appointment = params[:appointment]

    mail(to: @user.email, subject: 'Your appointment is created!')
end
