import { useTranslation } from 'react-i18next'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation();
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{t('Contact')}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {t('Email me')}
        </span>
      </a>
    </section>
  )
}

export default Contact
